    Vue.component('search', {
    template:  `<form action="#" class="nav__link_searchForm" @submit.prevent="$parent.filter">
                <button class="nav__link nav__link_left" href="#"><img src="img/search.svg" alt="search"></button>
                <input type="text" class="nav__link_searchInput" v-model="$parent.userSearch" placeholder="Search...">
                </form>
                `
})