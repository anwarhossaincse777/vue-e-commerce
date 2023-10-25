<script setup>
const footerItem = "flex flex-col inline-block text-lg text-gray-600 space-y-2";
const footerHeading = "text-2xl md:text-3xl font-bold py-4";
const footerItemLink = "ease-in duration-300 hover:underline";
</script>

<template>
  <footer class="bg-gray-100 py-8 md:py-16">
    <div class="container mx-auto px-4 md:px-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
        <img src="../assets/logo.png" class="h-40 mx-auto" alt="" />

        <div :class="footerItem">
          <h2 :class="footerHeading">Quick Links</h2>
          <ul>
            <li>* <a :class="footerItemLink" href="#">Introduction</a></li>
            <li>
              * <a :class="footerItemLink" href="#">know more About Us</a>
            </li>
            <li>* <a :class="footerItemLink" href="#">Visit Store</a></li>
            <li>* <a :class="footerItemLink" href="#">Let’s Connect</a></li>
          </ul>
        </div>
        <div :class="footerItem">
          <h2 :class="footerHeading">Important Links</h2>
          <ul>
            <li>* <a :class="footerItemLink" href="#">Privacy Policy</a></li>
            <li>* <a :class="footerItemLink" href="#">Shipping Details</a></li>
            <li>
              * <a :class="footerItemLink" href="#">Terms & Conditions</a>
            </li>
            <li>* <a :class="footerItemLink" href="#">Media Kit</a></li>
          </ul>
        </div>
        <div :class="footerItem">
          <h2 :class="footerHeading">Get In Touch</h2>
          <p>
            Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit,
            sed quia non numquam eius modi tempora incidunt lores ta porro ame.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
