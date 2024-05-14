const posts = [
    {
        title: 'Pirenópolis',
        content: "Pirenópolis é uma cidade localizada no estado brasileiro de Goiás. É conhecida por suas cachoeiras e arquitetura colonial portuguesa, e uma festa popular envolvendo cavalos montados chamada Festa do Divino Espírito Santo que acontece 45 dias após a Páscoa."
    },
    {
        title: 'Cidade de Goiás',
        content: "Goiás é um município brasileiro, antiga capital do estado homônimo. Foi reconhecido em 2001 pela UNESCO como Patrimônio Mundial, por sua arquitetura barroca peculiar, por suas tradições culturais seculares e pela natureza exuberante que o circunda."
    },
    {
        title: 'Caldas Novas',
        content: "Caldas Novas e Rio Quente, embora sejam cidades pequenas, recebem um número grande de turistas o ano inteiro. Suas fontes de água, com temperaturas que variam entre 36 e 70°C, são o grande motivo do lugar fazer sucesso — depois de você passar 5 minutos curtindo o mergulho no conforto de uma piscina morna sem sentir vontade de sair, dá para entender porque o local se tornou um grande sucesso. Casais, idosos e principalmente famílias com crianças adoram o lugar. Caldas."
    },

    {title: 'Chapada dos Veadeiros',
        content: "O Parque Nacional da Chapada dos Veadeiros fica no estado de Goiás, no centro do Brasil. É conhecido pelos deslumbrantes desfiladeiros e formações de cristais de quartzo. O rio Preto tem piscinas rochosas e quedas de água, algumas delas com mais de 100 metros de altura. O parque de biodiversidade alberga várias espécies de orquídeas e de vida selvagem, incluindo tatus, jaguares e tucanos. O acesso ao parque faz-se através das cidades vizinhas do Alto Paraíso de Goiás ou de São Jorge"
    }
];

const wrapper = document.getElementById('posts');

for (var i=0; i<posts.length; i++) {
    const postData = posts[i];
    console.log(postData);

    const article = document.createElement('article');
    article.classList.add('article');

    const title = document.createElement('h2');
    title.classList.add('article-title');
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);
    
    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);
    
    wrapper.appendChild(article);
}