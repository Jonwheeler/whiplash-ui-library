import React, { PropTypes } from 'react';
import './Logistics.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Logistics({ iconColor }) {
  return(
    <svg className="Logistics" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 95"><title>logistics</title><g className="Logistics-path" fill={ iconColor } fillRule="evenodd"><path d="M46.458 83.5c-19.9 0-36.2-16.2-36.2-36.2 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5 0 1.7.1 2.7c.6 7.8 4 15.2 9.6 20.7 5.6 5.6 12.9 9 20.7 9.6 1 .1 1.9.1 2.7.1.8 0 1.5.7 1.5 1.5s-.5 1.6-1.4 1.6m0-4c-.9 0-1.8 0-2.6-.1-15.7-1.3-28.2-13.8-29.4-29.4-.1-.9-.1-1.7-.1-2.6 0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5c0 20.5 16.7 37.2 37.2 37.2 1.4 0 2.5-1.1 2.5-2.5s-1.2-2.6-2.6-2.6m34.7-30.7c-.8 0-1.5-.7-1.5-1.5s0-1.7-.1-2.7c-.6-7.8-4-15.2-9.6-20.7-5.6-5.6-12.9-9-20.7-9.6-1-.1-1.9-.1-2.7-.1-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5c19.9 0 36.2 16.2 36.2 36.2-.1.7-.8 1.4-1.6 1.4m-34.7-38.7c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5c.9 0 1.8 0 2.6.1 15.7 1.3 28.2 13.8 29.4 29.4.1.9.1 1.7.1 2.6 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c.1-20.4-16.6-37.1-37.1-37.1"/><path d="M46.458 73.5c-3 0-5.9-.5-8.7-1.5-7.4-2.6-13.3-8.6-15.9-15.9-1-2.8-1.5-5.7-1.5-8.7 0-14.4 11.7-26.2 26.2-26.2 3 0 5.9.5 8.7 1.5 7.4 2.6 13.3 8.6 15.9 15.9 1 2.8 1.5 5.7 1.5 8.7 0 .8-.7 1.5-1.5 1.5-.4 0-.8-.2-1.1-.4-.3-.3-.4-.7-.4-1.1 0-12.8-10.4-23.2-23.2-23.2-12.8 0-23.1 10.4-23.1 23.2 0 12.8 10.4 23.2 23.2 23.2.4 0 .8.2 1.1.4.3.2.4.7.4 1.1-.1.8-.7 1.5-1.6 1.5m0-4c-12.2 0-22.2-9.9-22.2-22.2 0-12.2 9.9-22.2 22.2-22.2 12.3 0 22.2 10 22.2 22.2 0 .7.3 1.3.7 1.8.4.5 1.1.7 1.8.7 1.4 0 2.5-1.1 2.5-2.5 0-3.2-.6-6.2-1.6-9.1-2.7-7.7-8.8-13.8-16.5-16.5-2.8-1-5.9-1.6-9.1-1.6-15 0-27.2 12.2-27.2 27.2 0 3.2.6 6.2 1.6 9.1 2.7 7.7 8.8 13.8 16.5 16.5 2.8 1 5.9 1.6 9.1 1.6 1.4 0 2.5-1.1 2.5-2.5 0-.7-.3-1.3-.7-1.8-.4-.5-1.1-.7-1.8-.7"/><path d="M46.458 60.5c7.3 0 13.2-5.9 13.2-13.2 0-7.3-5.9-13.2-13.2-13.2-7.3 0-13.1 5.9-13.1 13.2 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-8.9 7.3-16.2 16.2-16.2 8.9 0 16.1 7.3 16.1 16.2 0 8.9-7.3 16.2-16.2 16.2-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5m0 4c9.5 0 17.2-7.7 17.2-17.2s-7.7-17.2-17.2-17.2-17.1 7.7-17.1 17.2c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-6.7 5.5-12.2 12.2-12.2 6.7 0 12.1 5.5 12.1 12.2 0 6.7-5.5 12.2-12.2 12.2-1.4 0-2.5 1.1-2.5 2.5s1.2 2.5 2.5 2.5"/><path d="M46.458 50.5c1.7 0 3.2-1.4 3.2-3.2 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 3.4-2.8 6.2-6.2 6.2-3.4 0-6.2-2.8-6.2-6.2 0-3.4 2.8-6.2 6.2-6.2.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5c-1.7 0-3.2 1.4-3.2 3.2.1 1.7 1.5 3.2 3.2 3.2m0-5.4c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2 7.2-3.2 7.2-7.2c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5c0 1.2-1 2.2-2.2 2.2-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2m-8.2-29.9c-3.1.8-6 2-8.7 3.6-2.2 1.3-4.2 2.8-6 4.5-2.3 2.2-4.2 4.6-5.8 7.4-.3.5-.8.7-1.3.7-.3 0-.5-.1-.7-.2-.7-.4-1-1.3-.5-2 4.9-8.4 12.8-14.4 22.3-16.9h.4c.7 0 1.3.5 1.5 1.1.1.8-.4 1.6-1.2 1.8m-.4-4c-.2 0-.4 0-.6.1-9.7 2.5-17.9 8.7-22.9 17.3-.7 1.2-.3 2.7.9 3.4.4.2.8.3 1.3.3.9 0 1.7-.4 2.2-1.2 1.5-2.7 3.4-5.1 5.6-7.1 1.8-1.7 3.7-3.2 5.8-4.4 2.6-1.5 5.4-2.7 8.4-3.5 1.3-.3 2.1-1.7 1.8-3-.4-1.1-1.4-1.9-2.5-1.9m43.7 44.9c-2.9 11.5-11.3 20.9-22.4 25.1-.2.1-.3.1-.5.1-.6 0-1.2-.4-1.4-1-.3-.8.1-1.6.9-1.9 1.9-.7 3.7-1.6 5.4-2.6 5.7-3.5 10.3-8.6 13.1-14.8.8-1.8 1.5-3.7 2-5.6.2-.7.8-1.1 1.5-1.1h.4c.4.1.7.3.9.7.1.3.2.7.1 1.1m-.8-2.8h-.6c-1.1 0-2.1.8-2.4 1.9-.5 1.9-1.1 3.7-1.9 5.5-2.7 6-7.2 11-12.8 14.3-1.6 1-3.4 1.8-5.2 2.5-1.3.5-1.9 1.9-1.5 3.2.4 1 1.3 1.6 2.3 1.6.3 0 .6-.1.9-.2 11.5-4.3 20.1-13.9 23.1-25.8.2-1.3-.6-2.6-1.9-3m-23.1 14.8c.1-.4.3-.7.7-.9 3.2-1.9 5.8-4.5 7.8-7.7.3-.4.8-.7 1.3-.7.3 0 .5.1.8.2.7.4.9 1.4.5 2.1-2.2 3.6-5.2 6.5-8.8 8.7-.2.1-.5.2-.8.2-.5 0-1-.3-1.3-.7-.2-.4-.3-.8-.2-1.2m1.5 2.9c.4 0 .9-.1 1.3-.4 3.8-2.2 6.8-5.3 9.1-9 .7-1.2.4-2.7-.8-3.4-.4-.3-.9-.4-1.3-.4-.8 0-1.7.4-2.1 1.2-1.9 3-4.4 5.5-7.4 7.3-1.2.7-1.6 2.2-.9 3.4.4.8 1.2 1.3 2.1 1.3"/><path d="M13.058 15.5c8.8-9.3 20.7-14.4 33.4-14.4 2.8 0 5.6.3 8.4.8.4.1.7.3 1 .6.2.3.3.7.2 1.1-.1.7-.7 1.2-1.5 1.2h-.3c-1.7-.3-3.4-.5-5.3-.6-1-.1-1.8-.1-2.5-.1-10.1 0-19.6 3.4-27.4 9.8-1.4 1.2-2.7 2.4-3.9 3.6-.3.3-.7.5-1.1.5-.4 0-.8-.1-1-.4-.3-.3-.5-.6-.5-1s.2-.8.5-1.1m1 3.6c.7 0 1.3-.3 1.8-.8 1.2-1.3 2.5-2.5 3.8-3.6 7.5-6.2 16.8-9.6 26.7-9.6.8 0 1.6 0 2.4.1 1.7.1 3.5.3 5.2.6h.5c1.2 0 2.2-.8 2.5-2.1.2-1.4-.7-2.7-2-2.9-2.8-.5-5.7-.8-8.5-.8-13.1 0-25.2 5.2-34.2 14.7-1 1-.9 2.6.1 3.5.5.6 1.1.9 1.7.9m77.1 29.7c-.8 0-1.5-.7-1.5-1.5 0-17.4-10.3-33-26.3-39.8-.4-.2-.7-.4-.8-.8-.2-.4-.1-.8 0-1.1.2-.6.8-.9 1.4-.9.2 0 .4 0 .6.1 17.1 7.2 28.1 23.9 28.1 42.5 0 .8-.7 1.5-1.5 1.5m-26.3-44.9c-.3-.1-.7-.2-1-.2-1 0-1.9.6-2.3 1.5-.5 1.3.1 2.7 1.3 3.3 15.7 6.6 25.8 21.8 25.8 38.8 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-19-11.3-36-28.8-43.4m-18.4 89.6c-22.3 0-41.4-15.9-45.4-37.9-.1-.4 0-.8.2-1.1.2-.3.6-.5 1-.6h.3c.7 0 1.3.5 1.5 1.2 3.7 20.5 21.6 35.4 42.5 35.4.8 0 1.5.7 1.5 1.5s-.7 1.5-1.6 1.5m0-4c-20.4 0-37.9-14.6-41.5-34.6-.2-1.2-1.3-2.1-2.5-2.1h-.4c-1.4.2-2.3 1.5-2 2.9 4.1 22.4 23.6 38.7 46.4 38.7 1.4 0 2.5-1.1 2.5-2.5s-1.1-2.4-2.5-2.4"/></g></svg>
  );
}


Logistics.propTypes = propTypes;
Logistics.defaultProps = defaultProps;
