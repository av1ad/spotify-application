import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCurrentUserPlaylists } from '../spotify';
import { catchErrors } from '../utils';
import { SectionWrapper, PlaylistsGrid } from '../components';

const Playlists = () => {
  const [playlistsData, setPlaylistsData] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCurrentUserPlaylists();
      setPlaylistsData(data);
    };
    catchErrors(fetchData());
  }, []);

  useEffect(() => {
    if (!playlistsData) {
      return;
    }

    const fetchMoreData = async () => {
      if (playlistsData.next) {
        const { data } = await axios.get(playlistsData.next);
        setPlaylistsData(data);
        setPlaylists(playlists => [...(playlists || []), ...data.items]);
      }
    };

    setPlaylists(playlistsData.items);

    catchErrors(fetchMoreData());
  }, [playlistsData]);

  return (
    <main>
      <SectionWrapper title="Public Playlists" breadcrumb={true}>
        {playlists && <PlaylistsGrid playlists={playlists} />}
      </SectionWrapper>
    </main>
  );
};

export default Playlists;