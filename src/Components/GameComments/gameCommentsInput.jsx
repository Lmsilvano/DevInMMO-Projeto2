import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useParams } from 'react-router'
import { CommentsList } from '../../contexts/commentsContext'
import { StyledPFormError } from './styles'

const schema = Yup.object().shape({
  name: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
  comment: Yup.string().min(4).max(400).required(),
})
//
function GameCommentsInput() {
  const id = useParams()
  const { localHanddler } = CommentsList()
  //
  const onSubmit = (values, actions) => {
    actions.resetForm()
    if (localStorage.getItem(`${id.id}-gamecomments`)) {
      console.log('entrou aqui')
      let array = JSON.parse(localStorage.getItem(`${id.id}-gamecomments`))
      localHanddler(values, array, id)
      return
    } else {
      let array = []
      localHanddler(values, array, id)
      return
    }
  }
  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        name: '',
        email: '',
        comment: '',
      }}
    >
      {({ isValid, errors, touched, values }) => (
        <Form>
          <div className="mainInput">
            <div>
              <Field type="text" id="name" name="name" placeholder="Name" />
              {errors.name && touched.name && (
                <StyledPFormError>Please type a valid Name</StyledPFormError>
              )}
            </div>
            <div>
              <Field type="text" id="email" name="email" placeholder="Email" />
              {errors.email && touched.email && (
                <StyledPFormError>Please type a valid Email</StyledPFormError>
              )}
            </div>
          </div>
          <div className="secondaryInput">
            <Field
              as="textarea"
              id="comment"
              name="comment"
              placeholder="Type your commentary here"
            />

            {errors.comment && touched.comment && (
              <StyledPFormError>
                Please enter a valid comment `(Min 4 characters, Max 400
                characters)`
              </StyledPFormError>
            )}

            <button
              type="submit"
              className="btnSendComment"
              disabled={!isValid}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default GameCommentsInput
