/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const styles = {
  headerLink: css({
    textDecoration: 'none',
    color: '#fff'
  }),
  pageTitle: css({
    marginTop: '20px',
    marginBottom: '20px',
    textAlign: 'center'
  }),
  primaryLink: css({
    color: '#009688'
  }),
  textAlignCenter: css({
    textAlign: 'center'
  }),
  commonForm: css({
    width: '100%',
    minWidth: '240px',
    maxWidth: '400px',
    margin: '0 auto'
  }),
  formBoader: css({
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '30px 20px'
  }),
  signInForm: css({
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 10px'
  }),
  textField: css({
    width: '100%',
    marginTop: '5px',
    marginBottom: '20px'
  }),
  containedButton: css({
    width: '100%',
    marginTop: '20px'
  }),
  divider: css({
    marginTop: '40px',
    marginBottom: '20px',
    marginLeft: '-20px',
    marginRight: '-20px'
  })
}
