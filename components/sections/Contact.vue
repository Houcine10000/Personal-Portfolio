<template>
  <section class="section" id="contact">
    <form @submit.prevent="sendMail" class="max-w-lg mx-auto">
      <div class="text-3xl font-medium text-white relative h-20 mb-16">
        <span> Say hello </span>

        <div class="line-shape"></div>
      </div>

      <div class="relative z-0 w-full mb-10 group">
        <input
          type="email"
          name="from_email"
          v-model="from_email"
          id="floating_text"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
          placeholder=" "
          @blur="check"
        />

        <label
          for="from_email"
          class="peer-focus:font-medium absolute text-sm text-white duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
          >Your email</label
        >

        <div
          class="button mt-3 bg-right-bottom peer-focus:bg-left-bottom transition-all ease-out duration-500 w-full h-[3px] bg-gradient-to-r from-buttons_primary from-50% to-slate-600 to-50%"
        ></div>

        <div ref="warningEml"></div>
      </div>

      <div class="relative z-0 w-full mb-16 group">
        <textarea
          cols="30"
          rows="1"
          v-model="message"
          name="message"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
          placeholder=" "
        />

        <label
          for="message"
          class="peer-focus:font-medium absolute text-sm text-white duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
          >Message</label
        >

        <div
          class="button mt-3 bg-right-bottom peer-focus:bg-left-bottom transition-all ease-out duration-500 w-full h-[3px] bg-gradient-to-r from-buttons_primary from-50% to-slate-600 to-50%"
        ></div>

        <div ref="warning"></div>
      </div>

      <button
        type="submit"
        class="contact-btn"
        v-for="(item, index) in hireMeBtn"
        :key="index"
      >
        <div class="fill-primary social-svg pr-7" v-html="item.svg" />

        Send message
      </button>
    </form>
  </section>
</template>

<script setup>
import { hireMeBtn } from "~/assets/constants";

import emailjs from "@emailjs/browser";

const form = ref(null);
const warning = ref(null);
const warningEml = ref(null);
const from_email = ref("");
const message = ref("");
const arr = ref([]);

const check = () => {
  if (from_email.value !== "") {
    for (let i = 0; i <= from_email.value.split("").length; i++) {
      if (from_email.value.includes("@", 0)) {
        const el = document.createElement("p");
        el.classList.add("hidden");
        el.innerText = ``;
        return warningEml.value.appendChild(el);
      } else if (i != "@") {
        const el = document.createElement("p");
        el.classList.add("text-red-500");
        el.innerText = `Please include an '@' in the email address. '${from_email.value}' is missing an '@'.`;
        return warningEml.value.appendChild(el);
      }
    }
  }
};

const sendMail = () => {
  if (
    // from_name.value !== "" &&
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
    setElm("Please fill all this field.", "text-red-500");
  }
};

function setElm(text, color) {
  const ele = document.createElement("p");

  ele.classList.add(color);
  ele.innerText = text;
  warning.value.appendChild(ele);
}
</script>

<style>
.button {
  background-size: 200% 100%;
}
</style>
