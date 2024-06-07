import anime from "animejs";

export const viewObserver = new IntersectionObserver((entries => {
    entries.forEach(entry => {
        // If the element is in view
        if (entry.isIntersecting) {
            // Animate the element
            console.log(entry.boundingClientRect.y)
            anime({
                targets: entry.target,
                translateY: [-100, 0], // Move the element back to its original position
                opacity: [0, 1], // Fade the element in
                duration: 1000 // Animation duration
            });

            // Stop observing once the animation is done
            // viewObserver.unobserve(entry.target);
        }
    });
}))
