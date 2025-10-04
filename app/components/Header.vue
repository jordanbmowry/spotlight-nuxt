<template>
  <div>
    <!-- Main Header -->
    <header
      ref="headerRef"
      class="pointer-events-none relative z-50 flex flex-none flex-col"
      :style="{
        height: 'var(--header-height)',
        marginBottom: 'var(--header-mb)',
      }"
    >
      <!-- Home page avatar section -->
      <template v-if="isHomePage">
        <div ref="avatarRef" class="order-last mt-[calc(4rem-0.75rem)]" />
        <Container
          class="top-0 order-last -mb-3 pt-3"
          :style="{
            position: 'var(--header-position)',
          }"
        >
          <div
            class="top-[var(--avatar-top,0.75rem)] w-full"
            :style="{
              position: 'var(--header-inner-position)',
            }"
          >
            <div class="relative">
              <AvatarContainer
                class="absolute top-3 left-0 origin-left transition-opacity"
                :style="{
                  opacity: 'var(--avatar-border-opacity, 0)',
                  transform: 'var(--avatar-border-transform)',
                }"
              />
              <Avatar
                :large="true"
                class="block h-16 w-16 origin-left"
                :style="{ transform: 'var(--avatar-image-transform)' }"
              />
            </div>
          </div>
        </Container>
      </template>

      <!-- Navigation section -->
      <div
        ref="navigationRef"
        class="top-0 z-10 h-16 pt-6"
        :style="{
          position: 'var(--header-position)',
        }"
      >
        <Container
          class="top-[var(--header-top,1.5rem)] w-full"
          :style="{
            position: 'var(--header-inner-position)',
          }"
        >
          <div class="relative flex gap-4">
            <div class="flex flex-1">
              <AvatarContainer v-if="!isHomePage">
                <Avatar />
              </AvatarContainer>
            </div>
            <div class="flex flex-1 justify-end md:justify-center">
              <MobileNavigation class="pointer-events-auto md:hidden" />
              <DesktopNavigation class="pointer-events-auto hidden md:block" />
            </div>
            <div class="flex justify-end md:flex-1">
              <div class="pointer-events-auto">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>

    <!-- Content offset for home page -->
    <div
      v-if="isHomePage"
      class="flex-none"
      :style="{ height: 'var(--content-offset)' }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

// Components
import Container from './Container.vue';
import MobileNavigation from './MobileNavigation.vue';
import DesktopNavigation from './DesktopNavigation.vue';
import ThemeToggle from './ThemeToggle.vue';
import Avatar from './Avatar.vue';
import AvatarContainer from './AvatarContainer.vue';

const route = useRoute();
const headerRef = ref<HTMLElement>();
const avatarRef = ref<HTMLElement>();
const navigationRef = ref<HTMLElement>();
const isInitial = ref(true);

const isHomePage = computed(() => route.path === '/');

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

function setProperty(property: string, value: string) {
  document.documentElement.style.setProperty(property, value);
}

function removeProperty(property: string) {
  document.documentElement.style.removeProperty(property);
}

function updateHeaderStyles() {
  if (!headerRef.value) {
    return;
  }

  const { top, height } = headerRef.value.getBoundingClientRect();
  const scrollY = clamp(
    window.scrollY,
    0,
    document.body.scrollHeight - window.innerHeight
  );

  const downDelay = avatarRef.value?.offsetTop ?? 0;
  const upDelay = 64;

  if (isInitial.value) {
    setProperty('--header-position', 'sticky');
  }

  setProperty('--content-offset', `${downDelay}px`);

  if (isInitial.value || scrollY < downDelay) {
    setProperty('--header-height', `${downDelay + height}px`);
    setProperty('--header-mb', `${-downDelay}px`);
  } else if (top + height < -upDelay) {
    const offset = Math.max(height, scrollY - upDelay);
    setProperty('--header-height', `${offset}px`);
    setProperty('--header-mb', `${height - offset}px`);
  } else if (top === 0) {
    setProperty('--header-height', `${scrollY + height}px`);
    setProperty('--header-mb', `${-scrollY}px`);
  }

  if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
    setProperty('--header-inner-position', 'fixed');
    removeProperty('--header-top');
    removeProperty('--avatar-top');
  } else {
    removeProperty('--header-inner-position');
    setProperty('--header-top', '0px');
    setProperty('--avatar-top', '0px');
  }
}

function updateAvatarStyles() {
  if (!isHomePage.value) {
    return;
  }

  const fromScale = 1;
  const toScale = 36 / 64;
  const fromX = 0;
  const toX = 2 / 16;

  const downDelay = avatarRef.value?.offsetTop ?? 0;
  const scrollY = downDelay - window.scrollY;

  let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
  scale = clamp(scale, fromScale, toScale);

  let x = (scrollY * (fromX - toX)) / downDelay + toX;
  x = clamp(x, fromX, toX);

  setProperty(
    '--avatar-image-transform',
    `translate3d(${x}rem, 0, 0) scale(${scale})`
  );

  const borderScale = 1 / (toScale / scale);
  const borderX = (-toX + x) * borderScale;
  const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

  setProperty('--avatar-border-transform', borderTransform);
  setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0');
}

function updateStyles() {
  updateHeaderStyles();
  updateAvatarStyles();
  isInitial.value = false;
}

onMounted(() => {
  updateStyles();
  window.addEventListener('scroll', updateStyles, { passive: true });
  window.addEventListener('resize', updateStyles);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateStyles);
  window.removeEventListener('resize', updateStyles);
});
</script>
