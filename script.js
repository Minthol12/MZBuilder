/* =====================================================
   MOBILE NAVIGATION
====================================================== */

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );

const navLinks =
    document.getElementById(
        "navLinks"
    );


mobileMenu.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "active"
        );

    }
);


document
    .querySelectorAll(
        ".nav-links a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );

                }
            );

        }
    );


/* =====================================================
   FAQ ACCORDION
====================================================== */

document
    .querySelectorAll(
        ".faq-question"
    )
    .forEach(
        question => {

            question.addEventListener(
                "click",
                () => {

                    const item =
                        question.parentElement;


                    const currentlyActive =
                        document.querySelector(
                            ".faq-item.active"
                        );


                    if (
                        currentlyActive &&
                        currentlyActive !== item
                    ) {

                        currentlyActive.classList.remove(
                            "active"
                        );

                    }


                    item.classList.toggle(
                        "active"
                    );

                }
            );

        }
    );


/* =====================================================
   FORM DEMO
====================================================== */

const form =
    document.getElementById(
        "projectForm"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );


form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        /*
            THIS IS ONLY A DEMO.

        */


        formMessage.style.display =
            "block";

        formMessage.textContent =
            "Thanks! The form is ready to be connected to M&Z Builders' email system.";

    }
);