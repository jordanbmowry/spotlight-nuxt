<template>
  <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
    <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <BriefcaseIcon class="h-6 w-6 flex-none" />
      <span class="ml-3">Work</span>
    </h2>
    <ol class="mt-6 space-y-4">
      <li v-for="(role, roleIndex) in resume" :key="roleIndex" class="flex gap-4">
        <div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <div class="h-7 w-7 rounded-full bg-zinc-200 dark:bg-zinc-700" />
        </div>
        <dl class="flex flex-auto flex-wrap gap-x-2">
          <dt class="sr-only">Company</dt>
          <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {{ role.company }}
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="text-xs text-zinc-500 dark:text-zinc-400">
            {{ role.title }}
          </dd>
          <dt class="sr-only">Date</dt>
          <dd
            class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            :aria-label="`${role.startLabel} until ${role.endLabel}`"
          >
            <time :datetime="role.startDate">{{ role.startLabel }}</time>
            <span aria-hidden="true"> — </span>
            <time :datetime="role.endDate">{{ role.endLabel }}</time>
          </dd>
        </dl>
      </li>
    </ol>
    <Button href="#" variant="secondary" class="group mt-6 w-full">
      Download CV
      <ArrowDownIcon class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import Button from '~/components/Button.vue'

// BriefcaseIcon component
function BriefcaseIcon(props: any) {
  return h(
    'svg',
    {
      viewBox: '0 0 24 24',
      fill: 'none',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'aria-hidden': 'true',
      ...props,
    },
    [
      h('path', {
        d: 'M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z',
        class: 'fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500',
      }),
      h('path', {
        d: 'M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5',
        class: 'stroke-zinc-400 dark:stroke-zinc-500',
      }),
    ],
  )
}

// ArrowDownIcon component
function ArrowDownIcon(props: any) {
  return h(
    'svg',
    {
      viewBox: '0 0 16 16',
      fill: 'none',
      'aria-hidden': 'true',
      ...props,
    },
    h('path', {
      d: 'M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    }),
  )
}

const resume = [
  {
    company: 'Planetaria',
    title: 'CEO',
    startLabel: '2019',
    startDate: '2019',
    endLabel: 'Present',
    endDate: new Date().getFullYear().toString(),
  },
  {
    company: 'Airbnb',
    title: 'Product Designer',
    startLabel: '2014',
    startDate: '2014',
    endLabel: '2019',
    endDate: '2019',
  },
  {
    company: 'Facebook',
    title: 'iOS Software Engineer',
    startLabel: '2011',
    startDate: '2011',
    endLabel: '2014',
    endDate: '2014',
  },
  {
    company: 'Starbucks',
    title: 'Shift Supervisor',
    startLabel: '2008',
    startDate: '2008',
    endLabel: '2011',
    endDate: '2011',
  },
]
</script>
