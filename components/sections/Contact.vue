<template>
  <section
    id="contact"
    class="section h-fit flex justify-center"
    role="region"
    aria-labelledby="contact-heading"
  >
    <div
      class="w-full mt-2 mb-16 lg:mx-10 xl:mx-0 xl:mr-5 transition-all duration-300 ease-out rounded-lg p-[1px] bg-gradient-to-b text-gradient"
      v-motion-slide-visible-once-left
    >
      <div class="bg-secondary py-8 px-10 rounded-lg">
        <p class="uppercase">Get In Touch</p>
        <h2
          id="contact-heading"
          class="text-3xl md:text-5xl font-bold mt-4 mb-8"
        >
          Contact Us
        </h2>

        <form @submit.prevent="sendMail" ref="form" class="flex flex-col gap-5">
          <label for="from_name" class="form-label">Your Name</label>
          <input
            class="form-input"
            type="text"
            name="from_name"
            v-model="from_name"
            placeholder="What's your good name?"
            aria-label="Your Name"
          />
          <label for="from_email" class="form-label">Your Email</label>
          <input
            class="form-input"
            type="email"
            name="from_email"
            v-model="from_email"
            placeholder="What's your Email?"
            aria-label="Your Email"
          />
          <label for="message" class="form-label">Your Message</label>
          <textarea
            name="message"
            v-model="message"
            cols="30"
            rows="4"
            class="form-input"
            placeholder="What you want to say?"
            aria-label="Your Message"
          ></textarea>
          <button
            type="submit"
            class="bg-tertiary rounded-lg w-fit py-3 px-6 font-semibold"
            aria-label="Send Message"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const form = ref(null);
const from_name = ref("");
const from_email = ref("");
const message = ref("");

const sendMail = () => {
  if (
    from_name.value !== "" &&
    from_email.value !== "" &&
    message.value !== ""
  ) {
    emailjs
      .sendForm(
        "service_38tp29a", // Replace with your service ID
        "template_obyycru", // Replace with your template ID
        form.value,
        "mTYUXGNdV9K7Eca52" // Replace with your user ID
      )
      .then(
        (result) => {
          setElm("Your message has been sent successfully.", "text-green-400");
          form.value.reset();
        },
        (error) => {
          setElm(
            "There was an error sending your message. Please try again later.",
            "text-yellow-400"
          );
        }
      );
  } else {
    setElm("Please fill all the fields.", "text-red-400");
  }
};

function setElm(text, color) {
  const el = document.createElement("p");
  el.classList.add(color);
  el.innerText = text;
  form.value.appendChild(el);
  setTimeout(() => {
    el.remove();
  }, 2500);
}
</script>

<style scoped>
.form-label {
  @apply font-normal text-[14px] xs:font-medium xs:text-[16px];
}
.form-input {
  @apply py-1 px-2 sm:py-2 text-[12px] sm:text-[16px] sm:px-4 rounded-md focus:outline-none bg-[#1E1E3B];
}
</style>
