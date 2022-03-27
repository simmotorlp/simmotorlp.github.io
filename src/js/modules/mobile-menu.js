import $ from 'jquery';

const menu = () => {
  $(document).on('click', '.js_menu', () => {
    const menuTrigger = $('.js_menu');
    const sidebar = $('.sidebar');
    menuTrigger.toggleClass('active');
    sidebar.toggleClass('active');
  });

  $(document).on('click', '*:not(.js_menu, .js_menu *, .sidebar, .sidebar *)', (event) => {
    console.log(event);
  });
};

export default menu;
