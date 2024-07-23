const letters = 'qwertyuioplkjhgfdsazxcvbnm';

let timeout = null;

document.addEventListener("DOMContentLoaded", () => {
    const textBlock = document.querySelector(".textClass");
    const originalText = textBlock.innerText;

    function startShuffling(textClass, iter, tick, delay, delayTrue) {
        let iteration = 0;
        const textBlock = document.querySelector('.' + textClass);
        const originalValue = textBlock.innerText;

        clearTimeout(timeout); //clears a previous timeout so i guess it reloads the animation?

        timeout = setTimeout(() => {
            clearInterval(interval);
        }, 100000);


        const interval = setInterval(() => {
            textBlock.innerText = originalValue
                .split("")
                .map((letter, index) => { //if you change letters -> letter it shows everything
                    if (index < iteration) {
                        return originalValue[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= originalValue.length) {
                clearInterval(interval);
                textBlock.innerText = originalValue;
            }
            if(delay > 0 && delayTrue){
                setTimeout(() => {
                    iteration += tick;
                    this.delayTrue = false;
                }, delay)
            }
            else {
                iteration += tick;
            }
        }, iter);

    };

    textBlock.addEventListener("mouseover", startShuffling('textClass', 20, 1 / 2, 500, true));
    textBlock.addEventListener("mouseover", startShuffling('textClass2', 20, 1 / 2, 2000, true));

    startShuffling();
});