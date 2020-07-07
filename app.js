/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-side-effects-in-computed-properties */
/* eslint-disable no-undef */
/* eslint-disable no-new */
const vm1 = new Vue({
  el: '#app',
  data: {
    event: {
      eventDate: 'August 14th - 16th',
      eventTitle: 'Summer Festival!',
      eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
      signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
    },
    newNameText: '',
    guestName: [],
    eventCapacity: 25,
    eventCapacityPercentage: 0,
  },
  methods: {
    formSubmitted() {
      if (this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
        this.guestName.push(this.newNameText);
        this.newNameText = '';
        this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100);
      }
    },
    keyPressed() {
      console.log('down');
    },
  },
  computed: {
    sortNames() {
      return this.guestName.sort();
    },
  },
  watch: {
    guestName() {
      console.log('up');
    },
  },
  filters: {
    formatName(value) {
      return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
    },
  },
});

const vm2 = new Vue({
  el: '#navigation',
  data: {
    appName: 'Guest List',
    navLinks: [
      { name: 'Home', id: 1, url: '' },
      { name: 'Upcoming events', id: 2, url: '' },
      { name: 'Guest benefits', id: 3, url: '' },
      { name: 'Latest News', id: 4, url: '' },
    ],
  },
  methods: {
    changeTitle() {
      this.$refs.name.innerText = 'Title changed';
    },
  },
});
