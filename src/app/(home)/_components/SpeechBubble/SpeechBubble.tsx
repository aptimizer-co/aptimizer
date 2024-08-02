import s from "./SpeechBubble.module.css";

type TSpeechBubble = {
  direction: "left" | "right";
  content: string;
};

const SpeechBubble = ({ direction, content }: TSpeechBubble) => {
  const renderSpeechBubble = (direction: "left" | "right") => {
    switch (direction) {
      case "left":
        return (
          <div className={`${s.SpeechBubble} ${s.left}`}>
            <span className={s.sentence}>{content}</span>
          </div>
        );
      case "right":
        return (
          <div className={`${s.SpeechBubble} ${s.right}`}>
            <span className={s.sentence}>{content}</span>
          </div>
        );
    }
  };

  return renderSpeechBubble(direction);
};

export default SpeechBubble;
