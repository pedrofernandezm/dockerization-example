import React from 'react';
import moment from 'moment';

export default function ReplyItem ({ reply }) {
  return(
    <div className="reply-item panel panel-default">
      <div className="panel-heading">
        <span className="info">Replied by { reply.attributes.author }</span>
        <span className="date pull-right">{ moment(reply.attributes['created-at']).fromNow() }</span>
      </div>
      <div className="panel-body">
        <p className="message">{ reply.attributes.message }</p>
      </div>
    </div>
  );
}
