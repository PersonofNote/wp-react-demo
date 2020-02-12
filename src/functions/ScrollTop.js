// TODO: Implement proportional timing on scroll to negate delay scrolling 
//to the top of short pages from very far down long pages.

export default function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }