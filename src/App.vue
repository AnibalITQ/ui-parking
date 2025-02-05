
<template>
	<!--
    <div class="app">
      <Sidebar v-if="!isLoginPage" />
      <router-view />
    </div>-->
	<div>
		<router-view/>
		<!--
		<ParkingStatus @toggleScanner="showScanner = true"/>
		<Scanner v-if="showScanner" @closeScanner="showScanner = false"/>
		-->
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue';
import ParkingStatus from '@/Views/Guardias/ParkingStatus.vue';
import Scanner from '@/Views/Guardias/Scanner.vue';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
	ParkingStatus,
	Scanner
  },
  setup() {
    const route = useRoute();
    const isLoginPage = computed(() => route.name === 'login');
	const showScanner = ref<boolean>(false);

    return {
      isLoginPage,
	  showScanner,
    };
  },
});
</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #002f6e;
	--dark-alt: #334155;
	--orange:#EC8013;
	--light-orange: #F2A14E;
	--light: #f1f5f9;
	--sidebar-width: 200px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>