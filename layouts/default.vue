<template>
  <div>
    <nav class="sticky top-0 bg-gray-800">
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-8 sm:w-full lg:w-3/4 h-16 flex items-center"
      >
        <div class="flex items-baseline space-x-0 md:space-x-4">
          <a
            href="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Etusivu</a
          >
        </div>
        <div class="ml-2 md:ml-10 flex items-baseline space-x-4">
          <a
            href="#projects"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Projektit</a
          >
        </div>
      </div>
    </nav>
    <main>
      <slot></slot>
    </main>
    <footer class="bg-gray-800">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex justify-center space-x-2 md:order-2">
            <a
              href="https://www.linkedin.com/in/iikka-piitulainen/"
              class="text-gray-400 hover:text-gray-300 social-link"
            >
              <img
                src="/assets/images/linkedin.svg"
                alt="linkedin"
                height="35px"
                width="35px"
              />
            </a>
            <a
              href="https://github.com/PiitulainenIikka"
              class="text-gray-400 hover:text-gray-300 social-link"
            >
              <img
                src="/assets/images/github.svg"
                alt="linkedin"
                height="35px"
                width="35px"
              />
            </a>
            <a
              href="mailto:iikkap.ip@gmail.com"
              class="text-gray-400 hover:text-gray-300 social-link"
            >
              <img
                src="/assets/images/at.svg"
                alt="at"
                height="35px"
                width="35px"
              />
            </a>
          </div>
          <div class="mt-8 md:mt-0 md:order-1">
            <p class="text-center text-base text-gray-300">
              Iikka Piitulainen 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  // Add your component logic here
};
</script>

<style>
/* Add your custom styles here */
main {
  min-height: calc(100vh - 184px);
}
.social-link {
  cursor: pointer;
}
.social-link::after {
  content: attr(data-text);
  position: relative;
  left: -8px;
}
</style>
