export const updateEventInfo = (hostName,eventName,time,location) => {
  return {
    type: 'UPDATE_EVENT_INFO',
    hostName,
    eventName,
    time,
    location
  }
}
