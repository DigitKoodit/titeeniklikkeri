FlowRouter.route('/', {
  name: "home",
  action: function(){
    ReactLayout.render(TiteeniClicker.Components.AppRoot, {yield: <TiteeniClicker.Components.LandingComponent/>});
  }
});

FlowRouter.route('/guilds/:guildId', {
  action: function(params, queryParams){
    ReactLayout.render(TiteeniClicker.Components.AppRoot, {yield: <TiteeniClicker.Components.GuildView id={params} />});
  }
})

FlowRouter.route('/tuomariston/oma/admin/sivu/', {
  action: function(params, queryParams){
    ReactLayout.render(TiteeniClicker.Components.AppRoot, {yield: <TiteeniClicker.Components.AdminView />});
  }
})
