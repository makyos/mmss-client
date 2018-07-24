import React from 'react';
import { observer } from 'mobx-react';

import Time from '../shared/time.jsx';

const SongItem = ({ item, onClickPlay, onClickAddToPlaylist }) => (
  <div
    className="SongItem"
    onClick={ev => {
      ev.metaKey
        ? onClickAddToPlaylist(item)
        : onClickPlay(item);
    }}
  >
    <div>{item.name}</div>
    <div className="SongItem_Sub">
      <div>{item.artist}</div>
      <div>
        Disc {item.disc || '-'}
        {' / '}
        Track {item.track || '-'}
        {' / '}
        <Time seconds={item.duration} />
      </div>
    </div>
  </div>
);

export default observer(SongItem);
