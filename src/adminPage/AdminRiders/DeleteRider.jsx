import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Fab from "@material-ui/core/Fab"
import { Delete } from "@material-ui/icons"
import Tooltip from "@material-ui/core/Tooltip"
import Dialog from "components/Dialog/Dialog"
import { useFetch } from "hooks"
import { Urls } from "utils"
import { useHistory } from "react-router-dom"

const DeleteRider = (props) => {
  const history = useHistory()
  const { rider } = props
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState()

  const { status } = useFetch({
    url,
    method: "DELETE",
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    if (status === "idle") {
      setUrl(`${Urls.bbtApiUrl}/riders/${rider.id}`)
    }
    setOpen(false)
  }

  useEffect(() => {
    if (status === "fetched") {
      setUrl("")
      history.push("/admin")
    }
  }, [status, history])

  return (
    <>
      <Tooltip title="Delete Rider" aria-label="Delete">
        <Fab
          color="secondary"
          aria-label="add"
          size="medium"
          onClick={handleClickOpen}
        >
          <Delete />
        </Fab>
      </Tooltip>
      <Dialog
        open={open}
        handleClose={handleClose}
        message={`Are You Sure You Want Delete Rider ${rider.first_name} ${rider.last_name}`}
      />
    </>
  )
}

DeleteRider.defaultProps = {
  rider: null,
}

DeleteRider.propTypes = {
  rider: PropTypes.oneOfType([PropTypes.object]),
}
export default DeleteRider
