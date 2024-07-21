document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    const themeToggler = document.querySelector('.theme-toggler');
    const calculator = document.querySelector('.calculator');
    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const btnValue = button.id;

            if (btnValue === 'clear') {
                displayValue = '';
            } else if (btnValue === 'backspace') {
                displayValue = displayValue.slice(0, -1);
            } else if (btnValue === 'equal') {
                try {
                    displayValue = eval(displayValue);
                } catch {
                    displayValue = 'Error';
                }
            } else {
                displayValue += btnValue;
            }

            display.textContent = displayValue;
        });
    });

    themeToggler.addEventListener('click', () => {
        calculator.classList.toggle('dark');
        themeToggler.classList.toggle('active');
    });
});
