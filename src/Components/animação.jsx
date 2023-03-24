function Animacao() {
	return (
		<main className="main-logo">
			{/* Navio */}
			<section className="container">
				{/* primeira linha */}
				<div className="linha">
					{[...Array(70)].map((_, index) =>
						index === 23 ? (
							<div className="celula size-3 cor-terciaria"></div>
						) : (
							<div className="celula"></div>
						)
					)}
				</div>
				{/* Segunda linha */}
				<div className="linha">
					{[...Array(70)].map((_, index) => (
						<div
							className={`celula${index === 23 ? " size-3 cor-quinaria" : ""}`}
						></div>
					))}
				</div>
				{/* terceira linha */}
				<div className="linha">
					{[...Array(60)].map((_, index) => (
						<div
							className={`celula${
								index === 17 ? " size-15 cor-quartenaria" : ""
							}`}
						></div>
					))}
				</div>
				<div className="linha">
					{[...Array(60)].map((_, index) => (
						<div
							className={`celula${index === 19 ? " size-5 cor-quinaria" : ""}${
								index === 20 ? " size-5 cor-terciaria" : ""
							}`}
						></div>
					))}
				</div>
				<div className="linha">
					{[...Array(60)].map((_, index) => (
						<div
							className={`celula${
								index === 18 ? " size-13 cor-secundaria" : ""
							}${index === 22 ? " size-9 cor-quinaria" : ""}${
								index === 23 ? " size-9 cor-quartenaria" : ""
							}${index === 27 ? " size-7 cor-terciaria" : ""}${
								index === 28 ? " size-11 cor-secundaria" : ""
							}`}
						></div>
					))}
				</div>
				<div className="linha">
					{[...Array(60)].map((_, index) => (
						<div
							className={`celula${index === 17 ? " size-15 cor-quinaria" : ""}${
								index === 21 ? " size-13 cor-quartenaria" : ""
							}${index === 22 ? " size-5 cor-terciaria" : ""}${
								index === 26 ? " size-9 cor-secundaria" : ""
							}${index === 27 ? " size-9 cor-quinaria" : ""}`}
						></div>
					))}
				</div>
				<div className="linha">
					{[...Array(60)].map((_, index) => (
						<div
							className={`celula${
								index === 17 ? " size-15 cor-terciaria" : ""
							}${index === 21 ? " size-5 cor-quartenaria" : ""}${
								index === 22 ? " size-7 cor-quinaria" : ""
							}${index === 23 ? " size-5 cor-terciaria" : ""}${
								index === 27 ? " size-7 cor-quartenaria" : ""
							}${index === 28 ? " size-11 cor-secundaria" : ""}`}
						></div>
					))}
				</div>
				<div className="linha">
					{[...Array(60)].map((_, index) => (
						<div
							className={`celula${
								index === 10 ? " size-5 cor-secundaria" : ""
							}${index === 15 ? " size-7 cor-terciaria" : ""}${
								index === 16 ? " size-7 cor-quinaria" : ""
							}${index === 20 ? " size-3 cor-quartenaria" : ""}${
								index === 21 ? " size-15 cor-secundaria" : ""
							}${index === 25 ? " size-5 cor-terciaria" : ""}${
								index === 26 ? " size-13 cor-quinaria" : ""
							}`}
						></div>
					))}
				</div>
				<div className="linha">
					{[...Array(60)].map((_, index) => (
						<div
							className={`celula${
								index === 10 ? " size-19 cor-quartenaria" : ""
							}${index === 11 ? " size-7 cor-secundaria" : ""}${
								index === 12 ? " size-11 cor-quinaria" : ""
							}${index === 13 ? " size-19 cor-terciaria" : ""}${
								index === 14 ? " size-3 cor-quartenaria" : ""
							}${index === 15 ? " size-9 cor-quinaria" : ""}${
								index === 16 ? " size-7 cor-secundaria" : ""
							}${index === 17 ? " size-11 cor-terciaria" : ""}`}
						></div>
					))}
				</div>
				<div className="linha">
					{[...Array(60)].map((_, index) => (
						<div
							className={`celula${index === 10 ? " size-3 cor-terciaria" : ""}${
								index === 11 ? " size-7 cor-quartenaria" : ""
							}${index === 12 ? " size-5 cor-secundaria" : ""}${
								index === 13 ? " size-17 cor-quinaria" : ""
							}${index === 14 ? " size-13 cor-secundaria" : ""}${
								index === 15 ? " size-19 cor-terciaria" : ""
							}${index === 16 ? " size-3 cor-quartenaria" : ""}${
								index === 17 ? " size-5 cor-quinaria" : ""
							}${index === 18 ? " size-7 cor-secundaria" : ""}`}
						></div>
					))}
				</div>
				<div className="linha">
					{[...Array(60)].map((_, index) => (
						<div
							className={`celula${
								index === 11 ? " size-3 cor-secundaria" : ""
							}${index === 12 ? " size-19 cor-quartenaria" : ""}${
								index === 13 ? " size-19 cor-terciaria" : ""
							}${index === 14 ? " size-7 cor-secundaria" : ""}${
								index === 15 ? " size-13 cor-terciaria" : ""
							}${index === 16 ? " size-9 cor-quinaria" : ""}${
								index === 17 ? " size-3 cor-quartenaria" : ""
							}`}
						></div>
					))}
				</div>
				<div className="linha">
					{[...Array(60)].map((_, index) => (
						<div
							className={`celula${index === 12 ? " size-3 cor-quinaria" : ""}${
								index === 13 ? " size-13 cor-terciaria" : ""
							}${index === 14 ? " size-19 cor-quinaria" : ""}${
								index === 15 ? " size-17 cor-secundaria" : ""
							}${index === 16 ? " size-7 cor-quartenaria" : ""}${
								index === 17 ? " size-3 cor-terciaria" : ""
							}${index === 18 ? " size-5 cor-secundaria" : ""}`}
						></div>
					))}
				</div>
				<div className="linha">
					{[...Array(60)].map((_, index) => (
						<div
							className={`celula${index === 13 ? " size-19 cor-quinaria" : ""}${
								index === 14 ? " size-5 cor-quartenaria" : ""
							}${index === 15 ? " size-11 cor-secundaria" : ""}${
								index === 16 ? " size-3 cor-quinaria" : ""
							}${index === 17 ? " size-17 cor-quartenaria" : ""}${
								index === 18 ? " size-9 cor-terciaria" : ""
							}`}
						></div>
					))}
				</div>
				<div className="linha">
					{[...Array(60)].map((_, index) => (
						<div
							className={`celula${
								index === 14 ? " size-7 cor-quartenaria" : ""
							}${index === 15 ? " size-15 cor-terciaria" : ""}${
								index === 16 ? " size-3 cor-quinaria" : ""
							}${index === 17 ? " size-5 cor-terciaria" : ""}${
								index === 18 ? " size-17 cor-secundaria" : ""
							}${index === 19 ? " size-3 cor-quartenaria" : ""}${
								index === 20 ? " size-7 cor-quinaria" : ""
							}`}
						></div>
					))}
				</div>
				<div className="linha">
					{[...Array(70)].map((_, index) => (
						<div className={`celula transparencia1`}></div>
					))}
				</div>
				<div className="linha">
					{[...Array(70)].map((_, index) => (
						<div className={`celula transparencia`}></div>
					))}
				</div>
			</section>
		</main>
	);
}

export default Animacao;
