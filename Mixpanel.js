import mixpanel from 'mixpanel-browser';

let env_check = process.env.NODE_ENV === 'production';

if (env_check) {
  // for production
  mixpanel.init('f004a7bd876f402de4067d1d69f9130f');
} else {
  // for uat
  mixpanel.init('add2da28ea31dca2fbe48db2fa01f153');
}

let actions = {
  identify: (id) => {
    mixpanel.identify(id);
  },
  alias: (id) => {
    mixpanel.alias(id);
  },
  track: (name, props) => {
    mixpanel.track(name, props);
  },
  people: {
    set: (props) => {
      mixpanel.people.set(props);
    },
  },
};

export let Mixpanel = actions;