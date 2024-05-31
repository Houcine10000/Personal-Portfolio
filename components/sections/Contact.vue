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
          @input="check"
        />

        <label
          for="from_email"
          class="peer-focus:font-medium absolute text-sm text-white duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
          >Your email</label
        >

        <div
          class="button mt-3 bg-right-bottom peer-focus:bg-left-bottom transition-all ease-out duration-500 w-full h-[3px] bg-gradient-to-r from-buttons_primary from-50% to-slate-600 to-50%"
        ></div>

        <div :class="`${warningEmlCls}`">
          {{ warningEmlTxt }}
        </div>
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
const warningEmlCls = ref(null);
const warningEmlTxt = ref(null);

const from_email = ref("");
const message = ref("");

const check = () => {
  if (from_email.value !== "") {
    if (!from_email.value.includes("@", 0)) {
      warningEmlCls.value = "text-red-500";
      warningEmlTxt.value = `Please include an '@' in the email address. '${from_email.value}' is missing an '@'.`;
      // setElm(
      //   `Please include an '@' in the email address. '${from_email.value}' is missing an '@'.`,
      //   "text-red-500"
      // );
    } else if (from_email.value.slice(from_email.value.length - 1) === "@") {
      warningEmlCls.value = "text-red-500";
      warningEmlTxt.value = `Please enter a part following '@'. '${from_email.value}' is incomplete`;

      // setElm(
      //   `Please enter a part following '@'. '${from_email.value}' is incomplete`,
      //   "text-red-500"
      // );
    } else {
      warningEmlCls.value = null;
      warningEmlTxt.value = null;
      // setElm(``, "hidden");
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
  // const el = document.createElement("p");

  ele.classList.add(color);
  ele.innerText = text;
  warning.value.appendChild(ele);

  // el.classList.add(color);
  // el.innerText = text;
  // warningEml.value.appendChild(el);
}
</script>

<style>
.button {
  background-size: 200% 100%;
}
</style>
