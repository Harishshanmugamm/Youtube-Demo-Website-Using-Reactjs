import { FaCheckCircle } from 'react-icons/fa';
import '../styles/VideoCard.css';

const VideoCard = ({ thumbnail, title, views, timestamp, channel, channelImage }) => {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card video-card">
        <img src={thumbnail} className="card-img-top" alt={title} />
        <div className="card-body">
          <div className="d-flex align-items-start">
            <img src={channelImage} alt={channel} className="channel-image rounded-circle me-2" />
            <div>
              <h5 className="card-title video-title text-truncate">{title}</h5>
              <p className="card-text channel-name">
                {channel} <FaCheckCircle className="verified-icon" />
              </p>
              <p className="card-text video-info text-muted">
                {views} views • {timestamp}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
