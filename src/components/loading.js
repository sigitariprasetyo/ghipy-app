import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className="box-loading">
      <ReactLoading type={"spin"} color={"white"} height={100} width={100} />
    </div>
  )
}

export default Loading