import React from 'react';
import Cars from './Cars.jsx';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {mount} from 'react-mount-layout';

const MainLayout = ({content}) => (
  <main>{content}</main>
);

FlowRouter.route("/", {
  action() {
    mount(MainLayout, {
      content: <Cars />
    });
  }
});
