// KidsEnglish - 主JavaScript文件

// 学习进度管理
const ProgressManager = {
  getStars() {
    return parseInt(localStorage.getItem('kidsEnglish_stars') || '0');
  },
  
  addStars(count) {
    const current = this.getStars();
    localStorage.setItem('kidsEnglish_stars', current + count);
    this.updateStarDisplay();
  },
  
  updateStarDisplay() {
    const starElements = document.querySelectorAll('.star-count');
    starElements.forEach(el => {
      el.textContent = this.getStars();
    });
  },
  
  getProgress(module) {
    return parseInt(localStorage.getItem(`kidsEnglish_progress_${module}`) || '0');
  },
  
  setProgress(module, value) {
    localStorage.setItem(`kidsEnglish_progress_${module}`, value);
  },
  
  getHighScore(game) {
    return parseInt(localStorage.getItem(`kidsEnglish_highscore_${game}`) || '0');
  },
  
  setHighScore(game, score) {
    const current = this.getHighScore(game);
    if (score > current) {
      localStorage.setItem(`kidsEnglish_highscore_${game}`, score);
    }
  }
};

// 语音合成 - 移动端优化版本
const SpeechManager = {
  synth: null,
  initialized: false,
  isSpeaking: false,
  voices: [],
  preferredVoice: null,
  
  // 检查是否支持语音合成
  isSupported() {
    return 'speechSynthesis' in window;
  },
  
  // 初始化语音合成
  init() {
    if (this.initialized) return true;
    
    if (!this.isSupported()) {
      console.warn('Speech synthesis not supported');
      return false;
    }
    
    try {
      this.synth = window.speechSynthesis;
      this.initialized = true;
      
      // 加载可用语音
      this.loadVoices();
      
      // 监听语音列表变化（某些浏览器异步加载）
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
      
      console.log('Speech synthesis initialized');
      return true;
    } catch (error) {
      console.error('Error initializing speech synthesis:', error);
      return false;
    }
  },
  
  // 加载可用语音
  loadVoices() {
    try {
      this.voices = this.synth.getVoices();
      
      // 优先选择英语语音
      this.preferredVoice = this.voices.find(voice => 
        voice.lang.startsWith('en') && voice.name.includes('Google')
      ) || this.voices.find(voice => 
        voice.lang.startsWith('en')
      ) || this.voices[0];
      
      console.log('Available voices:', this.voices.length);
      console.log('Preferred voice:', this.preferredVoice?.name);
    } catch (error) {
      console.error('Error loading voices:', error);
    }
  },
  
  // 播放语音 - 移动端优化
  speak(text, rate = 0.8, pitch = 1.2) {
    // 确保初始化
    if (!this.init()) {
      console.warn('Cannot speak: speech synthesis not initialized');
      return false;
    }
    
    try {
      // 移动端修复：在某些浏览器中需要重新获取实例
      if (!this.synth && window.speechSynthesis) {
        this.synth = window.speechSynthesis;
      }
      
      if (!this.synth) {
        console.warn('Speech synthesis not available');
        return false;
      }
      
      // 取消之前的语音
      this.synth.cancel();
      
      // 创建语音 utterance
      const utterance = new SpeechSynthesisUtterance(text);
      
      // 设置语音参数
      utterance.lang = 'en-US';
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = 1;
      
      // 使用首选语音
      if (this.preferredVoice) {
        utterance.voice = this.preferredVoice;
      }
      
      // 事件监听器
      utterance.onstart = () => {
        this.isSpeaking = true;
        console.log('Speech started:', text);
      };
      
      utterance.onend = () => {
        this.isSpeaking = false;
        console.log('Speech ended');
      };
      
      utterance.onerror = (event) => {
        this.isSpeaking = false;
        console.error('Speech error:', event.error, event);
        
        // 如果是'canceled'错误，可能是正常取消，不需要特别处理
        if (event.error !== 'canceled') {
          // 尝试重新初始化
          this.initialized = false;
          this.init();
        }
      };
      
      // 播放语音 - 关键：必须在用户交互的同步上下文中调用
      this.synth.speak(utterance);
      
      // 移动端修复：iOS Safari 需要保持引用
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        // iOS 需要保持对 utterance 的引用
        this._lastUtterance = utterance;
      }
      
      return true;
    } catch (error) {
      console.error('Error speaking:', error);
      this.isSpeaking = false;
      return false;
    }
  },
  
  // 停止播放
  stop() {
    try {
      if (this.synth) {
        this.synth.cancel();
        this.isSpeaking = false;
        console.log('Speech stopped');
      }
    } catch (error) {
      console.error('Error stopping speech:', error);
    }
  },
  
  // 检查是否正在播放
  isCurrentlySpeaking() {
    return this.isSpeaking;
  }
};

// 音效管理
const SoundManager = {
  audioContext: null,
  
  // 初始化音频上下文（必须在用户交互后调用）
  init() {
    if (!this.audioContext) {
      try {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.warn('AudioContext not supported');
      }
    }
  },
  
  playCorrect() {
    this.init();
    this.playTone(523.25, 0.1); // C5
    setTimeout(() => this.playTone(659.25, 0.1), 100); // E5
    setTimeout(() => this.playTone(783.99, 0.2), 200); // G5
  },
  
  playWrong() {
    this.init();
    this.playTone(200, 0.3);
  },
  
  playClick() {
    this.init();
    this.playTone(800, 0.05);
  },
  
  playWin() {
    this.init();
    // 胜利音效序列
    const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.15), i * 150);
    });
  },
  
  playTone(frequency, duration) {
    try {
      if (!this.audioContext) {
        this.init();
      }
      
      if (!this.audioContext) return;
      
      // 恢复音频上下文（如果被暂停）
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }
      
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
      
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
    } catch (e) {
      console.warn('Audio play failed:', e);
    }
  }
};

// 模态框管理
const ModalManager = {
  show(title, message, icon = '🎉', onClose = null) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-icon">${icon}</div>
        <div class="modal-title">${title}</div>
        <div class="modal-message">${message}</div>
        <button class="modal-btn" onclick="ModalManager.close(this)">太棒了！</button>
      </div>
    `;
    
    if (onClose) {
      modal.dataset.onClose = 'true';
      modal._onClose = onClose;
    }
    
    document.body.appendChild(modal);
    SoundManager.playWin();
  },
  
  close(btn) {
    const modal = btn.closest('.modal-overlay');
    if (modal._onClose) {
      modal._onClose();
    }
    modal.remove();
  }
};

// 全局变量标记用户是否已交互
let userHasInteracted = false;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  ProgressManager.updateStarDisplay();
  
  // 检测用户首次交互 - 同时监听 click 和 touchstart
  function handleFirstInteraction(event) {
    if (userHasInteracted) return;
    
    userHasInteracted = true;
    console.log('First user interaction detected');
    
    try {
      // 初始化音频上下文
      SoundManager.init();
      
      // 初始化语音合成
      SpeechManager.init();
      
      // 移动端修复：播放一个无声的 utterance 来激活语音合成
      // 这是解决 iOS Safari 和某些 Android 浏览器的关键
      if (SpeechManager.synth) {
        const silentUtterance = new SpeechSynthesisUtterance('');
        silentUtterance.volume = 0;
        SpeechManager.synth.speak(silentUtterance);
        console.log('Silent utterance played to activate speech synthesis');
      }
      
      // 恢复音频上下文（如果被暂停）
      if (SoundManager.audioContext && SoundManager.audioContext.state === 'suspended') {
        SoundManager.audioContext.resume();
      }
    } catch (error) {
      console.error('Error during first interaction:', error);
    }
    
    // 移除事件监听器
    document.removeEventListener('click', handleFirstInteraction);
    document.removeEventListener('touchstart', handleFirstInteraction);
    document.removeEventListener('touchend', handleFirstInteraction);
  }
  
  // 添加多个事件监听器以确保捕获首次交互
  document.addEventListener('click', handleFirstInteraction, { passive: true });
  document.addEventListener('touchstart', handleFirstInteraction, { passive: true });
  document.addEventListener('touchend', handleFirstInteraction, { passive: true });
  
  // 添加点击音效
  document.querySelectorAll('button, .module-card, .letter-card, .word-card').forEach(el => {
    el.addEventListener('click', () => SoundManager.playClick());
  });
});

// 页面可见性变化处理 - 某些浏览器在页面重新可见时需要重新初始化
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && userHasInteracted) {
    // 页面重新可见时，重新初始化语音合成
    if (SpeechManager.synth) {
      SpeechManager.synth.cancel();
    }
  }
});
