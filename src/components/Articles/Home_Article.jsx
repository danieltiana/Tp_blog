import { Container, Row, Col, Card } from 'react-bootstrap'
import { Donnees } from './Donnees'
import { Link, useNavigate } from 'react-router-dom'

function Home_Article () {
  const rediriger = useNavigate()
  const Redirection = lien => {
    rediriger(lien)
  }
  const echantillon = Donnees.slice(Donnees.length - 3)
  return (
    <section
      id='articles '
      className='py-5 bg-transparent bg-gradient-to-r from-black to-gray-900 bg-opacity-50 opacity-0 transition-opacity-duration-1000 ease-out opacity-100'
    >
      <Container data-aos='fade-up'>
        <h2 className='text-center mb-5 mon-titre font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-5xl'>
          Nos articles
        </h2>
        <Row>
          {echantillon.map(article => (
            <Col key={article.id} md={4} className='mb-4'>
              <Card
                onClick={function () {
                  Redirection(`articles/details/${article.id}`)
                }}
                className='h-100 border-none shadow-sm bg-gradient-to-r from-black to-gray-900'
              >
                <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-5 hover:opacity-20 transition-opacity' />

                <Card.Header className='text-secondary bg-gradient-to-r from-black to-gray-900 text-align-left p-0'>
                  <span className='badge bg-gray-900 text-light'>
                    {article.categories ? article.categories : 'Autre'}
                  </span>
                </Card.Header>
                <Card.Img
                  variant='top'
                  className='opacity-40 hover:opacity-60 transition-opacity'
                  src={article.image}
                />
                <Card.Body>
                  <Card.Title className='text-warning'>
                    {article.titre}
                  </Card.Title>
                  <Card.Text className='text-secondary'>{`${
                    article.descriptions.length <= 70
                      ? article.descriptions
                      : article.descriptions.slice(0, 90) + '...'
                  }`}</Card.Text>
                  <small className='text-muted text-'>{article.date}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <center>
            <div className='gap-6 voir'>
              <Link
                to={'articles'}
                className='btn group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl relative text-align-center'
              >
                <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-60 hover:opacity-100 transition-opacity' />
                <span className='relative text-white font-medium '>
                  Voir tous les articles
                </span>
              </Link>
            </div>
          </center>
        </Row>
      </Container>
    </section>
  )
}

export default Home_Article
