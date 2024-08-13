import express from 'express';
import sequelize from '../ProjetoFinalM4/src/database/config.js';
import corsConfig from './src/config/corsConfig.js';
import { pacienteRouter } from './src/router/paciente.routes.js';
import { agendamentoRouter } from './src/routers/agendamento.router.js';
import { enfermeiroRouter } from './src/routers/enfermeiro.router.js'; 

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(corsConfig);

app.use('/api', pacienteRouter);
app.use('/api', agendamentoRouter);
app.use('/api', enfermeiroRouter); 

sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`A aplicação está rodando na porta http://localhost:${PORT}`);
        });
    })
    .catch((erro) => {
        console.error("Não foi possível conectar no banco de dados", erro);
    });