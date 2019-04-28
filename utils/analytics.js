// utils/analytics.js
import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize(process.env.googleAnalyticsKey)
}
export const logPageView = () => {
  console.log('Logging pageview for', window.location.pathname);
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

/*

  Guide documentation for event usage:

  Value	Notes
  args.category	String. Required. A top level category for these events. E.g. 'User', 'Navigation', 'App Editing', etc.
  args.action	String. Required. A description of the behaviour. E.g. 'Clicked Delete', 'Added a component', 'Deleted account', etc.
  args.label	String. Optional. More precise labelling of the related action. E.g. alongside the 'Added a component' action, we could add the name of a component as the label. E.g. 'Survey', 'Heading', 'Button', etc.
  args.value	Int. Optional. A means of recording a numerical value against an event. E.g. a rating, a score, etc.
  args.nonInteraction	Boolean. Optional. If an event is not triggered by a user interaction, but instead by our code (e.g. on page load, it should be flagged as a nonInteraction event to avoid skewing bounce rate data.
  args.transport	String. Optional. This specifies the transport mechanism with which hits will be sent. Valid values include 'beacon', 'xhr', or 'image'.
  
*/

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
