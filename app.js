const app = Vue.createApp({
  data() {
    return {
      active: true,
      sliders: [  
      {
          id: 1,
          title: "Manufactured with the best materials",
          text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
          imgDesktop: "./images/desktop-image-hero-3.jpg",
          imgMobile: "./images/mobile-image-hero-3.jpg",
          alt: "Image header 1",
      },
      
        {
          id: 2,
          title: "Discover innovative ways to decorate",
          text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
          imgDesktop: "./images/desktop-image-hero-1.jpg",
          imgMobile: "./images/mobile-image-hero-1.jpg",
          alt: "Image header 1"
      },
      {
        id: 3,
        title: `We are available all across the globe`,
        text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`,
        imgDesktop: "./images/desktop-image-hero-2.jpg",
        imgMobile: "./images/mobile-image-hero-2.jpg",
        alt: "Image header 1"
    },
    ] 
    };
  },
  methods: {  
  slidePrev: function(){
      const last = this.sliders.pop();
      this.sliders = [last].concat(this.sliders); 
   },
  slideNext: function(){
    const first = this.sliders.shift();
    this.sliders = this.sliders.concat(first);
  }
  },
});
app.mount('#app');