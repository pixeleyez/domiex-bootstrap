function countdownTimer(timeInSeconds) {
    return {
        minutes: Math.floor(timeInSeconds / 60),
        seconds: timeInSeconds % 60,
        timer: null,
        startTimer() {
            this.timer = setInterval(() => {
                if (this.minutes === 0 && this.seconds === 0) {
                    clearInterval(this.timer);
                } else {
                    if (this.seconds === 0) {
                        this.minutes--;
                        this.seconds = 59;
                    } else {
                        this.seconds--;
                    }
                }
            }, 1000);
        },
        stopTimer() {
            clearInterval(this.timer);
        }
    }
}