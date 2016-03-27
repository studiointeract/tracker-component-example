const MainLayout = ({content}) => (
  <main>{content}</main>
);

FlowRouter.route("/", {
  action() {
    ReactLayout.render(MainLayout, {
      content: <Cars />
    });
  }
});
