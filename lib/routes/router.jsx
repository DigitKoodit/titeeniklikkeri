FlowRouter.route('/', {
  name: "home",
  action: function(){
    ReactLayout.render(AppRoot, {yield: <LandingComponent/>});
  }
});

FlowRouter.route('/guilds/:guildId', {
  action: function(params, queryParams){
    ReactLayout.render(AppRoot, {yield: <GuildView id={params} />});
  }
})

FlowRouter.route('/tuomariston/oma/admin/sivu/', {
  action: function(params, queryParams){
    ReactLayout.render(AppRoot, {yield: <AdminView />});
  }
})
