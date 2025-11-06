import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import Constants from 'expo-constants';


const dadosCurriculo = {
  nome: "Marcela Negrão",
  cargo: "UX/UI Designer",
  
  sobreMim: "Olá! Sou estudante de Análise e Desenvolvimento de Sistemas pelo SENAC, participante do programa Embarque Digital, com grande afinidade por desenvolvimento front-end e design. Me identifico com o desenvolvimento de interfaces modernas, acessíveis e funcionais, unindo estética e usabilidade para oferecer boas experiências ao usuário. Estou em constante evolução, buscando projetos que me desafiem e me permitam crescer na área, além de aprimorar meu olhar criativo e técnico. ✨",


  fotoUrl: "https://placehold.co/200x200/007bff/fff.png?text=Marcela", 
  
  contato: {
    email: "marcelanegraosm@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/marcela-negr%C3%A3o-0974582a5/",
  },
  
  hardSkills: [
    "UX/UI Design",
    "Figma",
    "HTML & CSS",
    "JavaScript",
    "MySQL"
  ],
  softSkills: [
    "Organização",
    "Gerenciamento de tempo",
    "Trabalho em Equipe",
    "Responsabilidade",
    "Proatividade"
  ],
  
  formacaoAcademica: [
    {
      id: 1,
      titulo: "Curso Superior em Análise e Desenvolvimento de Sistemas",
      instituicao: "SENAC - Embarque Digital",
      periodo: "2024 - 2026",
      descricao: "Curso em andamento - 3º período"
    },
    {
      id: 2,
      titulo: "Curso Técnico em Multimídia",
      instituicao: "Escola Técnica Estadual Ginásio Pernambucano",
      periodo: "2021 - 2023",
      descricao: "Concluído"
    }
  ],

  cursosAprimoramentos: [
    {
      id: 1,
      titulo: "Curso de Lógica de programação",
      instituicao: "Alura",
      duracao: "12H - 2024"
    },
    {
      id: 2,
      titulo: "Curso de UI Design",
      instituicao: "Alura",
      duracao: "14H - 2024"
    },
    {
      id: 3,
      titulo: "Full Stack - Formação",
      instituicao: "Rockeatseat",
      duracao: "120H - 2025"
    },
    {
      id: 4,
      titulo: "Curso de Python",
      instituicao: "Alura",
      duracao: "30H - 2024"
    },
    {
      id: 5,
      titulo: "Inglês para Devs - Formação",
      instituicao: "Rockeatseat",
      duracao: "30h - 2025"
    }
  ]
};

type SkillsProps = {
  habilidades: string[];
  titulo: string;
};

const Skills: React.FC<SkillsProps> = ({ habilidades, titulo }) => (
  <View style={styles.secao}>
    <Text style={[styles.tituloSecao, styles.tituloSkills]}> {titulo}</Text>
    {habilidades.map((habilidade, index) => (
      <Text key={index} style={styles.textoHabilidade}>- {habilidade}</Text>
    ))}
  </View>
);

type FormacaoAcademicaProps = {
  formacao: typeof dadosCurriculo.formacaoAcademica[0];
};

const FormacaoAcademica: React.FC<FormacaoAcademicaProps> = ({ formacao }) => (
  <View style={styles.cardExperiencia}>
    <Text style={styles.tituloExperiencia}>{formacao.titulo}</Text>
    <Text style={styles.empresa}>{formacao.instituicao} ({formacao.periodo})</Text>
    <Text style={styles.descricao}>{formacao.descricao}</Text>
  </View>
);

type CursoProps = {
  curso: typeof dadosCurriculo.cursosAprimoramentos[0];
};

const Curso: React.FC<CursoProps> = ({ curso }) => (
  <View style={styles.cardCurso}>
    <Text style={styles.tituloCurso}>{curso.titulo}</Text>
    <Text style={styles.instituicaoCurso}>{curso.instituicao}</Text>
    <Text style={styles.duracaoCurso}>Duração: {curso.duracao}</Text>
  </View>
);


const handleOpenLink = (url: string) => {
  Linking.openURL(url).catch(err => console.error("Não foi possível abrir o link", err));
};

const App: React.FC = () => {
  const { contato, sobreMim } = dadosCurriculo;

  return (
    <ScrollView style={styles.container}>
      
      {/* Cabeçalho com Foto e Nome */}
      <View style={styles.header}>
        <Image
          style={styles.foto}
          source={{ uri: dadosCurriculo.fotoUrl }}
        />
        <Text style={styles.nome}>{dadosCurriculo.nome}</Text>
        <Text style={styles.cargo}>{dadosCurriculo.cargo}</Text>
      </View>

      {/* SEÇÃO SOBRE MIM */}
      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Sobre Mim</Text>
        <Text style={styles.textoSobreMim}>{sobreMim}</Text>
      </View>
      
      {/* SEÇÃO DE CONTATO (Botões) */}
      <View style={styles.secaoContatos}>
        <Text style={styles.tituloSecao}>Entre em Contato</Text>
        <View style={styles.botoesContainer}>
          <TouchableOpacity 
            style={[styles.botao, styles.botaoEmail]}
            onPress={() => handleOpenLink(`mailto:${contato.email}`)}
          >
            <Text style={styles.textoBotao}>📧 Enviar E-mail</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.botao, styles.botaoLinkedin]}
            onPress={() => handleOpenLink(contato.linkedinUrl)}
          >
            <Text style={styles.textoBotao}>🔗 LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* HARD SKILLS */}
      <Skills habilidades={dadosCurriculo.hardSkills} titulo="Hard Skills" />

      {/* SOFT SKILLS */}
      <Skills habilidades={dadosCurriculo.softSkills} titulo= "Soft Skills" />

      {/* FORMAÇÃO ACADÊMICA */}
      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Formação Acadêmica</Text>
        {dadosCurriculo.formacaoAcademica.map((formacao) => (
          <FormacaoAcademica key={formacao.id} formacao={formacao} />
        ))}
      </View>

      {/* CURSOS E APRIMORAMENTOS */}
      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Cursos e Aprimoramentos</Text>
        {dadosCurriculo.cursosAprimoramentos.map((curso) => (
          <Curso key={curso.id} curso={curso} />
        ))}
      </View>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: Constants.statusBarHeight + 20, 
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 8,
    marginHorizontal: 15,
    elevation: 3, 
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#007bff',
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  cargo: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  secao: {
    padding: 15,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
    elevation: 1,
  },

  textoSobreMim: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444'
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#d03377', 
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  tituloSkills: {

    color: '#3498db',
    marginBottom: 5,
  },
  textoHabilidade: {
    fontSize: 16,
    marginLeft: 10,
    lineHeight: 24,
  },
  cardExperiencia: { 
    marginBottom: 15,
    paddingLeft: 5,
    borderLeftWidth: 3,
    borderLeftColor: '#28a745', 
  },
  tituloExperiencia: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  empresa: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 14,
    color: '#444',
  },
  cardCurso: {
    marginBottom: 10,
    paddingLeft: 5,
    borderLeftWidth: 3,
    borderLeftColor: '#f39c12',
  },
  tituloCurso: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  instituicaoCurso: {
    fontSize: 14,
    color: '#555',
  },
  duracaoCurso: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 2,
  },
  // botões
  secaoContatos: {
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 1,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  botao: {
    flex: 1,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  botaoEmail: {
    backgroundColor: '#c10000ff',
    marginRight: 10,
  },
  botaoLinkedin: {
    backgroundColor: '#0077B5',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  }
});