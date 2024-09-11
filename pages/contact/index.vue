<template>
  <section class="h-screen flex justify-center" id="contact">
    <form
      ref="form"
      @submit.prevent="sendMail"
      class="w-[85%] sm:w-[60%] lg:w-[45%] mt-20"
      v-motion="SlideLeft"
    >
      <div
        class="text-4xl font-medium dark:text-white text-primary relative h-24 mb-16"
      >
        <span class="ease-in duration-300">Say hello</span>
        <div class="line-shape"></div>
      </div>

      <div class="relative z-0 w-full mb-16 group" ref="fade1">
        <input
          type="email"
          name="from_email"
          v-model="from_email"
          class="inputCnt peer"
          placeholder=" "
          @input="handleEmailInput"
          @blur="handleEmailBlur"
        />

        <label for="from_email" class="labelCnt"> Your email </label>

        <div
          :class="`dark:from-buttons_primary from-l_primary from-50% ${warningEmlCls ? 'dark:to-error_primary to-error_primary' : 'dark:to-zinc-700 to-l_border'} button labelBtmBorder `"
        ></div>

        <div
          v-if="warningEmlTxt"
          :class="`${warningEmlCls} pt-2 flex font-medium`"
        >
          <Icon name="mdi-light:alert" class="iconCnt" />

          {{ warningEmlTxt }}
        </div>
      </div>

      <div class="relative z-0 w-full group" ref="fade2">
        <textarea
          cols="30"
          rows="1"
          v-model="message"
          name="message"
          class="inputCnt peer"
          placeholder=" "
          @input="handleMessageInput"
          @blur="handleMessageBlur"
        />

        <label for="message" class="labelCnt"> Message </label>

        <div
          :class="`dark:from-buttons_primary from-l_primary from-50% ${warningMsgCls ? 'dark:to-error_primary to-error_primary' : 'dark:to-zinc-700 to-l_border'} button labelBtmBorder `"
        ></div>

        <div
          v-if="warningMsgTxt"
          :class="`${warningMsgCls} pt-2 flex font-medium`"
        >
          <Icon name="mdi-light:alert" class="iconCnt" />

          {{ warningMsgTxt }}
        </div>
      </div>

      <div
        v-if="gineralWarningMsg"
        :class="`${gineralWarningCls} contact-btn mt-10 ${gineralWarningCls === 'text-yellow-400' ? 'bg-error_secondary' : 'bg-succes_primary'}  text-sm font-light py-4 w-full`"
      >
        <Icon
          :name="`${gineralWarningCls === 'text-yellow-400' ? 'mdi-light:information' : 'mdi-light:flash'}`"
          :class="`text-2xl ${gineralWarningCls === 'text-yellow-400' ? 'stroke-yellow-400' : 'stroke-green-400'}  mr-1`"
        />

        {{ gineralWarningMsg }}
      </div>

      <button
        @click="isClicked"
        type="submit"
        class="contact-btn dark:bg-buttons_primary dark:text-primary"
        v-for="(item, index) in hireMeBtn"
        :key="index"
      >
        <div
          class="dark:fill-primary fill-l_exstra_text social-svg pr-7"
          v-html="checkIsClicked ? item.load : item.svg"
        />
        <span> Send message </span>
      </button>
    </form>
  </section>
</template>

<script setup>
import { hireMeBtn } from "~/assets/constants";
import emailjs from "@emailjs/browser";
import { SlideBottom, SlideLeft } from "~/assets/motions";
import autoAnimate from "@formkit/auto-animate";

// definePageMeta({
//   layout: "custom",
// });

const fade1 = ref(); // we need a DOM node
const fade2 = ref(); // we need a DOM node

const checkIsClicked = ref(false);

const isClicked = () => {
  if (emailTouched.value) {
    checkIsClicked.value = true;
  }
};
onMounted(() => {
  autoAnimate(fade1.value); // thats it!
  autoAnimate(fade2.value); // thats it!
});

const form = ref(null);
const warningEmlCls = ref(null);
const warningEmlTxt = ref(null);

const warningMsgCls = ref(null);
const warningMsgTxt = ref(null);

const gineralWarningCls = ref(null);
const gineralWarningMsg = ref(null);

const from_email = ref("");
const message = ref("");

const emailTouched = ref(false); // Track if the email input has been blurred
const messageTouched = ref(false); // Track if the message input has been blurred

const handleEmailInput = () => {
  if (emailTouched.value) {
    handelEmail();
  }
};

const handleEmailBlur = () => {
  if (from_email.value != "") {
    emailTouched.value = true;
    handelEmail();
  }
};

const handleMessageInput = () => {
  if (messageTouched.value) {
    handelMessage();
  }
};

const handleMessageBlur = () => {
  if (message.value != "") {
    messageTouched.value = true;
    handelMessage();
  }
};

const handelEmail = () => {
  if (from_email.value !== "") {
    for (let i = 0; i < from_email.value.length; i++) {
      if (!from_email.value.includes("@", 0)) {
        setElm(
          "text-error_primary",
          `Please include an '@' in the email address. '${from_email.value}' is missing an '@'.`
        );
      } else if (from_email.value.slice(-1) === "@") {
        setElm(
          "text-error_primary",
          `Please enter a part following '@'. '${from_email.value}' is incomplete.`
        );
      } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(from_email.value)) {
        setElm("text-error_primary", `Please enter a valid email.`);
      } else {
        setElm("", "");
      }
    }
  } else {
    setElm("text-error_primary", "Please fill out this field.");
  }
};

const handelMessage = () => {
  if (message.value !== "") {
    warningMsgCls.value = null;
    warningMsgTxt.value = null;
  } else {
    warningMsgCls.value = "text-error_primary";
    warningMsgTxt.value = "Please fill out this field.";
  }
};

const sendMail = () => {
  if (from_email.value != "" && message.value != "") {
    emailjs
      .sendForm(
        "service_38tp29a", // Replace with your service ID
        "template_obyycru", // Replace with your template ID
        form.value,
        "mTYUXGNdV9K7Eca52" // Replace with your user ID
      )
      .then(
        (res) => {
          setErr("text-green-400", "Your message has been sent successfully.");

          form.value.reset();
          checkIsClicked.value = false;

          setTimeout(() => {
            gineralWarningCls.value = null;
            gineralWarningMsg.value = null;
          }, 3000);
        },
        (err) => {
          setErr(
            "text-yellow-400",
            "There was an error sending your message. Please try again later."
          );

          setTimeout(() => {
            gineralWarningCls.value = null;
            gineralWarningMsg.value = null;
          }, 3000);
        }
      );
  } else {
    handelMessage();
    handelEmail();
  }
};

const setElm = (color, text) => {
  warningEmlCls.value = color;
  warningEmlTxt.value = text;
};

const setErr = (color, text) => {
  gineralWarningCls.value = color;
  gineralWarningMsg.value = text;
};
</script>

<style>
.button {
  background-size: 200% 100%;
}
</style>
