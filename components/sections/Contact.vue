<template>
  <section class="section" id="contact">
    <form ref="form" @submit.prevent="sendMail" class="max-w-lg mx-auto">
      <div
        class="text-3xl font-medium text-white relative h-20 mb-16"
        v-motion-slide-visible-once-top
      >
        <span>Say hello</span>
        <div class="line-shape"></div>
      </div>

      <div class="relative z-0 w-full mb-10 group" ref="dropdown2">
        <input
          type="email"
          name="from_email"
          v-model="from_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
          placeholder=" "
          @input="handleEmailInput"
          @blur="handleEmailBlur"
        />

        <label
          for="from_email"
          class="font-light absolute text-md text-white/85 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white/20 peer-focus:dark:text-white/60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-7"
        >
          Your email
        </label>

        <div
          :class="`from-buttons_primary from-50% ${warningEmlCls ? 'to-error_primary' : 'to-slate-600'} to-50% button mt-3 bg-right-bottom peer-focus:bg-left-bottom transition-all ease-out duration-500 w-full h-[2.5px] bg-gradient-to-r `"
        ></div>

        <div
          v-if="warningEmlTxt"
          :class="`${warningEmlCls} pt-2 flex font-medium`"
        >
          <Icon
            name="mdi-light:alert"
            class="text-2xl font-semibold stroke-error_primary mr-1"
          />

          {{ warningEmlTxt }}
        </div>
      </div>

      <div class="relative z-0 w-full group" ref="dropdown">
        <textarea
          cols="30"
          rows="1"
          v-model="message"
          name="message"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
          placeholder=" "
          @input="handleMessageInput"
          @blur="handleMessageBlur"
        />

        <label
          for="message"
          class="font-light absolute text-md text-white/85 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white/20 peer-focus:dark:text-white/60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-7"
        >
          Message
        </label>

        <div
          :class="`from-buttons_primary from-50% ${warningMsgCls ? 'to-error_primary' : 'to-slate-600'} to-50% button mt-3 bg-right-bottom peer-focus:bg-left-bottom transition-all ease-out duration-500 w-full h-[2.5px] bg-gradient-to-r `"
        ></div>

        <div
          v-if="warningMsgTxt"
          :class="`${warningMsgCls} pt-2 flex font-medium`"
        >
          <Icon
            name="mdi-light:alert"
            class="text-2xl font-semibold stroke-error_primary mr-1"
          />

          {{ warningMsgTxt }}
        </div>
      </div>

      <div
        v-if="gineralWarningMsg"
        :class="`${gineralWarningCls} contact-btn mt-10 ${gineralWarningCls === 'text-yellow-400' ? 'bg-error_secondary' : 'bg-succes_primary'}  text-sm font-light py-4 w-full`"
        v-motion="SlideBottom"
      >
        <Icon
          :name="`${gineralWarningCls === 'text-yellow-400' ? 'mdi-light:information' : 'mdi-light:flash'}`"
          :class="`text-2xl ${gineralWarningCls === 'text-yellow-400' ? 'stroke-yellow-400' : 'stroke-green-400'}  mr-1`"
        />

        {{ gineralWarningMsg }}
      </div>

      <button
        type="submit"
        class="contact-btn"
        v-for="(item, index) in hireMeBtn"
        :key="index"
        v-motion-slide-visible-once-bottom
      >
        <div
          class="fill-primary social-svg pr-7"
          v-html="gineralWarningCls == 'text-green-400' ? item.load : item.svg"
        />
        <span> Send message </span>
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { hireMeBtn } from "~/assets/constants";
import emailjs from "@emailjs/browser";
import { SlideBottom } from "~/assets/motions";
import autoAnimate from "@formkit/auto-animate";

const dropdown = ref(); // we need a DOM node
const dropdown2 = ref(); // we need a DOM node


onMounted(() => {
  autoAnimate(dropdown.value); // thats it!
  autoAnimate(dropdown2.value); // thats it!
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
    } else {
      setElm("", "");
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

          // gineralWarningCls.value = "text-green-400";
          // gineralWarningMsg.value = "Your message has been sent successfully.";
          form.value.reset();
        },
        (err) => {
          setErr(
            "text-yellow-400",
            "There was an error sending your message. Please try again later."
          );

          // gineralWarningCls.value = "text-yellow-400";
          // gineralWarningMsg.value =
          //   "There was an error sending your message. Please try again later.";

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
  color: #4adc7f49;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
