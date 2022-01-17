//PlayerInfo

type AccInfo = {
  id: number;
  name: string;
  email: string;
  azul?: boolean;
};

const acc: AccInfo = {
  id: 123,
  name: "Fulano de Tal A",
  cpf: integer,
};

type CaracterInfo = {
  guild: string;
  level: number;
};

const car: CaracterInfo = {
  guild: "Torresmo",
  level: 100,
};

// intersection. uniao dos 2 tipo
type PlayerInfo = AccInfo & CaracterInfo;

const player: PlayerInfo = {
  id: 213,
};
