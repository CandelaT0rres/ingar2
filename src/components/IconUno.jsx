import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const IconUno = ({ icon, css }) => {
  return <FontAwesomeIcon className={css} icon={icon} />
}