// Get / page

module.exports = (req, res) => {
  const menus = [
    {
      name: res.__('Waitlist'),
      details: res.__('See users in the waitlist and take them out of the waitlist'),
      role: 'product_head',
      link: '/waitlist'
    },
    {
      name: res.__('Questions'),
      details: res.__('See, create and edit questions'),
      role: 'product_head',
      link: '/questions'
    },
    {
      name: res.__('Campaigns'),
      details: res.__('See, create, edit and check submitions of campaigns'),
      role: 'product_head',
      link: '/campaigns'
    },
    {
      name: res.__('Payments'),
      details: res.__('See and approve payments of users'),
      role: 'financial_manager',
      link: '/payments'
    }
  ];

  return res.render('index/index', {
    page: 'index/index',
    title: 'Main Page',
    includes: {
      external: {
        css: ['page', 'fontawesome', 'general', 'menu']
      }
    },
    admin: req.session.admin,
    menus: menus
            .filter(menu => req.session.admin.roles.includes(menu.role))
            .map(menu => {
              return {
                name: menu.name,
                details: menu.details,
                role: res.__(menu.role),
                link: menu.link
              };
            })
  });
}
