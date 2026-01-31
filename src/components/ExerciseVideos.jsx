import React from 'react';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <h3 className="capitalize">Loading Videos...</h3>;

  return (
    <div className="mt-5 lg:mt-24 p-5">
      <h3 className="text-3xl lg:text-4xl font-bold text-[#000] mb-8">
        Watch <span className="text-[#FF2625] capitalize">{name}</span> exercise videos
      </h3>

      <div className="flex flex-wrap justify-start gap-8 lg:gap-28">
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="w-[300px] lg:w-[360px] text-decoration-none"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
           
            <img 
              className="rounded-tl-[20px] h-[200px] w-full object-cover border-l-4 border-[#FF2625]" 
              src={item.video.thumbnails[0].url} 
              alt={item.video.title} 
            />
            
            <div className="mt-3">
              <h5 className="text-lg lg:text-xl font-semibold text-[#000]">
                {item.video.title}
              </h5>
              <h6 className="text-sm text-gray-500">
                {item.video.channelName}
              </h6>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;