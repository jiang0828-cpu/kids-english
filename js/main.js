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

// 语音合成
const SpeechManager = {
  synth: window.speechSynthesis,
  
  speak(text, rate = 0.8, pitch = 1.2) {
    if (!this.synth) {
      console.warn('Speech synthesis not supported');
      return;
    }
    
    // 取消之前的语音
    this.synth.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = 1;
    
    this.synth.speak(utterance);
  },
  
  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
};

// 音效管理
const SoundManager = {
  playCorrect() {
    this.playTone(523.25, 0.1); // C5
    setTimeout(() => this.playTone(659.25, 0.1), 100); // E5
    setTimeout(() => this.playTone(783.99, 0.2), 200); // G5
  },
  
  playWrong() {
    this.playTone(200, 0.3);
  },
  
  playClick() {
    this.playTone(800, 0.05);
  },
  
  playWin() {
    // 胜利音效序列
    const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.15), i * 150);
    });
  },
  
  playTone(frequency, duration) {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
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

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  ProgressManager.updateStarDisplay();
  
  // 添加点击音效
  document.querySelectorAll('button, .module-card, .letter-card, .word-card').forEach(el => {
    el.addEventListener('click', () => SoundManager.playClick());
  });
});
