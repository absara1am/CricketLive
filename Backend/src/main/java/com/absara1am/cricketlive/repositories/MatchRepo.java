package com.absara1am.cricketlive.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.absara1am.cricketlive.entities.Match;

public interface MatchRepo extends JpaRepository<Match, Integer> {

	Optional<Match> findByTeamHeading(String teamHeading);
}
