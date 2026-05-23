class FertilityPatternAnalyzer:
    '''
    IA inicial baseada em pontuação inteligente.
    Depois pode ser substituída por um modelo treinado com scikit-learn.
    '''

    @staticmethod
    def analyze(
        species: str,
        age_years: int,
        previous_inseminations: int,
        confirmed_pregnancies: int,
        abortions: int,
        births: int,
    ) -> dict:
        score = 50

        if 2 <= age_years <= 6:
            score += 20
        elif age_years > 8:
            score -= 15

        if previous_inseminations > 0:
            success_rate = confirmed_pregnancies / previous_inseminations
            if success_rate >= 0.7:
                score += 20
            elif success_rate >= 0.4:
                score += 10
            else:
                score -= 10

        if births > 0:
            score += 10

        if abortions > 0:
            score -= abortions * 12

        species = species.lower().strip()
        if species in ["bovino", "ovino", "caprino"]:
            score += 5

        score = max(0, min(100, score))

        if score >= 75:
            risk_level = "baixo"
            pattern = "Padrão positivo de fertilidade e desempenho reprodutivo."
            recommendation = "Priorizar este animal em programas de inseminação artificial."
        elif score >= 50:
            risk_level = "moderado"
            pattern = "Padrão intermediário de fertilidade. Requer acompanhamento."
            recommendation = "Animal pode ser considerado, mas recomenda-se avaliar histórico e condição atual."
        else:
            risk_level = "alto"
            pattern = "Padrão de baixa fertilidade ou maior risco reprodutivo."
            recommendation = "Recomenda-se avaliação técnica antes de nova inseminação."

        return {
            "fertility_score": score,
            "risk_level": risk_level,
            "pattern_identified": pattern,
            "recommendation": recommendation,
        }
