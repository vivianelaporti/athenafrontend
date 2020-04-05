
{% block scripts %}
    <div class="cadHistoriasPaciente">
        <h1>Cadastro de Histórias de Pacientes</h1>
        <form>
            <p>Nome da História do Paciente: <br> <input class="inEmail"> </p>
            <p>  CID <br> <select class="inCID"> </select> </p>
            <p>Quadro clínico: <br> <textarea class="inqdclin" cols="50"></textarea> </p>

           </form>
    </div>

    {% include 'Participante.html' %}

    {% include 'listaParticipantes.html' %}

{% endblock %}