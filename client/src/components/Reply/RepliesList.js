import React from 'react';
import ReplyItem from './index.js';

export default function RepliesList({ replies }){
  return(
    <div>
      { replies.map(item =>
          <div key={item.id}>
            <ReplyItem reply={item} />
          </div>
        )
      }
    </div>
  );
}
