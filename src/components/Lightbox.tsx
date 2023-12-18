import Slider from "./Slider";
import "./Lightbox.scss";
import { IconButton } from "./buttons";
import { motion } from "framer-motion";

interface Props {
  images: string[];
  thumbnails: string[];
  onClose?: () => void;
}

const Lightbox = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="lightbox"
    >
      <div className="close-container">
        <IconButton description="close lightbox" onClick={props.onClose}>
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M73.6366 16.0143L84.5497 26.9072L60.9029 50.4949L84.5446 74.0928L73.6314 84.9857L50 61.3827L26.3686 84.9806L15.4554 74.0877L39.0869 50.5L15.4503 26.9072L26.3634 16.0143L49.9949 39.6071L73.6366 16.0143Z"
              fill="#69707D"
            />
          </svg>
        </IconButton>
      </div>
      <Slider {...props} />
    </motion.div>
  );
};

export default Lightbox;
