
const Coin = (props) => {
  return (
    <React.Fragment>
      <div className={'coin'}>
        <i className={'cf ' + props.icon}></i>
      </div>
      <style jsx>{`
        .coin {
          width: 50px;
          height: 50px;
          margin: 20px;
          border-radius: 50px;
          border: 3px dotted black;
          background: white;
          transition: all 0.5s ease;
          opacity: 1;
        }
        i {
          color: black;
          margin: 10px 12px;
          font-size: 21px;
        }
        @media (max-width: 600px) {
          .coin {
            margin: 10px;
          }
        }
        `}
      </style>
    </React.Fragment>
  )
}

export default Coin;
